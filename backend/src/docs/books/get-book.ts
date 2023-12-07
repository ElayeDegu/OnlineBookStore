module.exports = {
    get:{
        tags:['Online Book Store'],
        description: "Get a Book",
        operationId: "getBook",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "A single book id"
            }
        ],
        responses:{
            '200':{
                description:"Book is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Book"
                        }
                    }
                }
            },
            '404':{
                description: "Book is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"We can't find the book",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}