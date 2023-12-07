
module.exports = {
    components:{
        schemas:{
            id:{
                type:'string',
                description:"An id of a book",
                example: "4"
            },
            Book:{
                type:'object',
                properties:{
                    id:{
                        type:'string',
                        description:"Book identification number",
                        example:"3"
                    },
                    title:{
                        type:'string',
                        description:"Book's title",
                        example:"Coding in JavaScript"
                    },
                    writer:{
                        type:'string',
                        description:"Book's writer",
                        example:"Helen Adam"
                    },
                    coverImage:{
                        type:'bigint',
                        description:"Book's cover image",
                        example:"https://pics.clipartpng.com/Black_Book_PNG_Clipart-1048.png"
                    },
                    price:{
                        type:'string',
                        description:"Book's price",
                        example:"8950"
                    },
                    tag:{
                        type:"enum",
                        description:"The status of the Book",
                        example:"SCIENCE"
                    }
                }
            },
            BookInput:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"Book's title",
                        example:"Coding in JavaScript"
                    },
                    writer:{
                        type:'string',
                        description:"Book's writer",
                        example:"Helen Adam"
                    },
                    coverImage:{
                        type:'bigint',
                        description:"Book's cover image",
                        example:"https://pics.clipartpng.com/Black_Book_PNG_Clipart-1048.png"
                    },
                    price:{
                        type:'string',
                        description:"Book's price",
                        example:"8950"
                    },
                    tag:{
                        type:"enum",
                        description:"The status of the Book",
                        example:"SCIENCE"
                    }
                }
            },
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}