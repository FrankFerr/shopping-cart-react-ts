export type Validator<T> = {
    [K in keyof T] : {
        validate: (value: T[K]) => boolean,
        message: string
    }
}

export type ResultValidation<T> = {
    valid: boolean,
    errors: Partial<Record<keyof T, string>>
}

export function validateFiled<T extends object>(data: T, validator: Validator<T>): ResultValidation<T>{
    const errors: Partial<Record<keyof T, string>> = {}

    for(const key in validator){
        const validatorField = validator[key]

        if(validatorField.validate(data[key])){
            errors[key] = validatorField.message
        }
    }

    const result: ResultValidation<T> = {
        valid: Object.keys(errors).length === 0,
        errors: errors
    }

    return result
}