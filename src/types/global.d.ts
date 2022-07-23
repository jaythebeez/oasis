declare global {

    interface option {
        value: string
    }

    type FieldTypes = "Dropdown" | "Checkbox";

    interface FormField {
        type: FieldTypes,
        label?: string,
        options: option [] 
    }

}

export {};