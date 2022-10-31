 module.exports = {
   hello: (req, res) => {
      res.status(200).json({
         message: "hello world!"
      })
   },

   sum: (req, res) => {
      let x = req.body.x;
      let y = req.body.y;

      if(typeof x === "undefined" || typeof y === "undefined") {
         return res.status(400).json({
             message: "invalid params"
         })
      }

      let result = 0

      if (typeof x === "string" || typeof y === "string") {
         result = `${x}${y}`;
      } else {
         result = x + y
      }

      res.json({
         message: result
      })
   }
 }