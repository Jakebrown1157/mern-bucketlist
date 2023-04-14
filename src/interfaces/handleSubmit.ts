export interface event {
    onChange: React.ChangeEvent<HTMLInputElement>,
    event: React.FormEvent<HTMLFormElement>,
    target: target
}

export interface target {
    name: string,
    value: string
}

