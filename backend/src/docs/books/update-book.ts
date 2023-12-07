module.exports = {
    put:{
        tags:['Online Book Store'],
        description: "Update book",
        operationId: "updateBook",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "Id of book to be updated"
            }
        ],
        responses:{

            '200':{
                description: "Book updated successfully"
            },
            '404':{
                description: "Book not found"
            },
            '500':{
                description: "Server error"
            }
            
        }
    }
}