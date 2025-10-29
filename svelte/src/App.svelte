<script>
	import "./App.css"
	import MonkeySvg from "./assets/monkeySvg.svelte";
	import JavascriptSvg from "./assets/javascriptSvg.svelte";
	import SvelteSvg from "./assets/svelteSvg.svelte"
</script>

<main>
	<div class='main'>
		<div class='content'>
			<div class='inner-content'>
				<MonkeySvg/>
	
				<div class='tech-container'>
					<SvelteSvg/>
					<JavascriptSvg/>
				</div>
	
				<div class='description-container'>
					<header class='header'>
						Svelte + JS
					</header>
					<p class='description'>
						{"Congrats! You've reached the first page of your website. To customize anything on this site, simply go ahead and make changes to your files via t.Webpages."}
					</p>
				</div>
			</div>  
		</div>
	</div>
</main>