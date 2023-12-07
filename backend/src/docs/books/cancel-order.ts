module.exports = {
    delete:{
        tags: ['Online Book Store'],
        description: "Cancel Order",
        operationId: "cancelOrder",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "Canceling an order"
            }
        ],
        responses:{
            '200':{
                description:"Order canceled successfully"
            },
            '404':{
                description:"Order not found"
            },
            '500':{
                description:"Server error"
            }
        }
    }
}