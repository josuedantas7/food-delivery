export interface TypesGenericModal {
    title: string,
    description: string,
    children: React.ReactNode,
    textButtonCancel?: string,
    textButtonAction?: string,
    defaultModal?: boolean,
    cancelAction: () => void,
    action: () => void,
    typeModal?: 'alert' | 'error'
}