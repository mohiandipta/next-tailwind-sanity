

export default ({
    name: 'form',
    type: 'document',
    title: 'Form',
    fields: [
        ({
            name: 'sortNum',
            title: 'Arrangement Number',
            description: "1 to 5",
            type: "number",
            validation: (Rule) => Rule.min(1).max(6)
        }),
        ({
            name: 'label',
            title: 'Label',
            type: 'string'
        }),
        ({
            name: 'inputOptions',
            title: 'Input Options',
            type: 'string',
            options: {
                list: [
                    { title: 'Text', value: 'text' },
                    { title: 'Phone', value: 'number' },
                    { title: 'Email', value: 'email' },
                    { title: 'Elinks', value: 'link' },
                    { title: 'Checkbox must', value: 'cMust' },
                    { title: 'Checkbox options', value: 'cNormal' },
                ],
            },
        }),
    ]
})