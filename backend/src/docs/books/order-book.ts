
module.exports = {
    post:{
        tags:['Online Book Store'],
        description: "Order Book",
        operationId: "orderBook",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/BookInput'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "Book ordered successfully"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}