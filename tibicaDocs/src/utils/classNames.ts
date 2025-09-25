export interface IClassNamesMap {
    [className: string]: any;
}

function classNames(defaultClassName = '', ...rest: IClassNamesMap[]): string {
    const classList = Array.from(defaultClassName ? [defaultClassName] : [])

    if (rest.length) {
        rest.forEach((classNamesMap: IClassNamesMap) => {
            Object.entries(classNamesMap)
                .forEach(([className, condition]) => {
                    if (condition) {
                        classList.push(className)
                    }
                })
        })
    }

    return classList.join(" ")
}

export default classNames
