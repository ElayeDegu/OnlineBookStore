module.exports = {
    get:{
        tags: ['Online Book Store'],
        description: "Get books",
        operationId: 'getBooks',
        parameters:[],
        responses:{
            '200':{
                description:"Books were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Book'
                        }
                    }
                }
            }
        }
    }
}