
export interface IThemeStruct {
    [key: string]: string
}

export const themeBuilder = (
    currentClasses: string[],
    themeStruct: IThemeStruct,
    themes?: string
) => {
    if(themes) {
        themes?.split(" ").forEach(theme => {
            currentClasses.push(themeStruct[theme])
        })
    }
}
