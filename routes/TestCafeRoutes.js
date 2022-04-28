import TestCafeController from "../Controllers/TestCafeController.js";

export default(app) => {
    // Check if server is up and running
    app.get('/api/v1/health-check',(req,res) => {
        res.json({
            ok:true,
            data:{},
            msg:"Server is open and running."
        });
    });

    app.post('/api/v1/testCafe/launch',(req,res) => {
        TestCafeController.startBrwoser(req.body)
            .then((result) => {
                console.log(result)
                res.json({
                    ok:true,
                    result
                });
            })
            .catch((err)=> {
                res.json({
                    ok:false,
                    result: {
                        status:500,
                        resultMessage: err.message
                    }
                })
            })
    })

    app.post('/api/v1/testCafe/populateForm',(req,res) => {
        TestCafeController.populateForm(req)
            .then((result)=> {
                console.log(result),
                res.json({
                    ok:true,
                    result
                })
            })
            .catch((err) => {
                res.json({
                    ok:false,
                    status:500,
                    resultMessage:err.message
                })
            })
    })    
}