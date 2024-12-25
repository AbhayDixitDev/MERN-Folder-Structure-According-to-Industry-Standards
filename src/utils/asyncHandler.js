const asyncHandler = (requestHandler)=>{
    return async (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch(err => next(err));
    }
}


export {asyncHandler};

// const asyncHandler = (fn) => async (req,res,next) => {

//     try {
//        await fn(req,res,next);  
//     } catch (error) {
//         res.status(error.statusCode || 500).json({success: false,message: error.message});
//     }
// }