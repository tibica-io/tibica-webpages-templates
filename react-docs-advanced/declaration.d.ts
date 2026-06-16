declare module "*.module.scss";

declare module "*.svg" {
    const src: string
    export default src
}

declare module "*.svg?react" {
    import React = require("react");
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    export default ReactComponent
}

declare module "*.png" {
    const value: any
    export = value;
}
