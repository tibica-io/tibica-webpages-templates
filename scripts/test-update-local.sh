#!/usr/bin/env bash
# Use Node 22 if available via nvm (ncu@latest requires Node 20+)
if [ -d "$HOME/.nvm/versions/node/v22.17.0/bin" ]; then
  export PATH="$HOME/.nvm/versions/node/v22.17.0/bin:$PATH"
fi
# Local test script — mirrors the GitHub Actions workflow logic.
# Does NOT modify package.json or push anything by default.
# Usage:
#   bash scripts/test-update-local.sh          # dry-run (shows what ncu would change, skips install/build)
#   bash scripts/test-update-local.sh --full   # runs ncu -u + npm install + npm build (modifies package.json!)

set -u
set +e

FULL=false
if [[ "${1:-}" == "--full" ]]; then
  FULL=true
fi

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

SKIP="email-signature-generator html-static templates-config"

PASS=0
FAIL=0
SKIP_COUNT=0

echo ""
echo "======================================"
echo "  Template Dependency Update Test"
echo "  Mode: $([ "$FULL" = true ] && echo 'FULL (ncu -u + install + build)' || echo 'DRY RUN (ncu check only)')"
echo "======================================"
echo ""

printf "%-30s %-20s %-15s\n" "Template" "Updated" "Build"
printf "%-30s %-20s %-15s\n" "--------" "-------" "-----"

for dir in $(ls -d */ | sort); do
  TEMPLATE="${dir%/}"

  # Skip non-template dirs
  case "$TEMPLATE" in
    .git|templates-config|email-signature-generator|html-static|scripts) continue ;;
  esac

  [ ! -f "$TEMPLATE/package.json" ] && continue

  pushd "$TEMPLATE" > /dev/null

  if [ "$FULL" = true ]; then
    # --- FULL MODE: actually update + install + build ---
    ORIG=$(cat package.json)
    npx --yes npm-check-updates@latest -u --silent 2>/dev/null

    if [ "$(cat package.json)" != "$ORIG" ]; then
      UPDATED="✅ Updated"
    else
      UPDATED="➖ No change"
    fi

    npm install --legacy-peer-deps --no-fund --no-audit --silent 2>&1

    BUILD_KEY=$(jq -r 'if .scripts.build then "build" elif .scripts["docs:build"] then "docs:build" else "" end' package.json)

    if [ -n "$BUILD_KEY" ]; then
      if [[ "$TEMPLATE" == react-cra* ]]; then
        CI=false npm run "$BUILD_KEY" > /dev/null 2>&1
      else
        npm run "$BUILD_KEY" > /dev/null 2>&1
      fi
      BUILD_EXIT=$?

      if [ $BUILD_EXIT -eq 0 ]; then
        BUILD="✅ Pass"
        ((PASS++))
      else
        BUILD="❌ Fail"
        ((FAIL++))
      fi
    else
      BUILD="⏭️  Skip"
      ((SKIP_COUNT++))
    fi

  else
    # --- DRY RUN MODE: just show what ncu would change ---
    NCU_OUT=$(npx --yes npm-check-updates@latest 2>/dev/null)
    if echo "$NCU_OUT" | grep -q "→"; then
      UPDATED="⬆️  Has updates"
    else
      UPDATED="➖ Up to date"
    fi
    BUILD="— (dry run)"
  fi

  popd > /dev/null

  printf "%-30s %-20s %-15s\n" "$TEMPLATE" "$UPDATED" "$BUILD"
done

echo ""
if [ "$FULL" = true ]; then
  echo "Results: ✅ $PASS passed  ❌ $FAIL failed  ⏭️  $SKIP_COUNT skipped"
fi
echo ""
