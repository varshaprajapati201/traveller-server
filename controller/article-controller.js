const Article = require("../model/article-schema.js")

const url = "http://localhost:3000"

// const uploadImage = (req,res)=>{
// if(!req.file){
//     return res.status(404).json({message:"file not found"});
// }

// const imageUrl = `${url}/file/${req.file.filename}`;

// return res.status(200).json(imageUrl);
// }

// const getImage = (req,res)=>{
    
// }

const addArticle = async (req,res)=>{
    const article = req.body;
       
    const newArticle = new Article(article);
try{
await newArticle.save();
res.status(200).json(newArticle);
}catch(error){
res.status(409).json({message:error.message});
}
}

const getArticle = async (req,res) =>{

    try{
      const articles = await Article.find({})
      res.status(200).json(articles);
    }catch(error){
  res.status(404).json({message: error.message});
    }
  }


  const deleteArticle = async (req,res)=>{
    try{
    await Article.deleteOne({_id:req.params.id});
    res.status(200).json({message:"article deleted successfully"});
    }catch(error){
      res.status(409).json({message: error.message});
    }
    }

    const getArticleById = async (req,res)=>{
        try{
          const article = await Article.findById(req.params.id);

          return res.status(200).json(article);

        } catch(error){
         return res.status(409).json({message: error.message});
        }
    }


     const getArticleToEdit = async (req,res) =>{
      // console.log(req.params.id);
        try{
          const article = await Article.findById(req.params.id);
          res.status(200).json(article);
        }catch(error){
      res.status(404).json({message: error.message});
        }
      }
      
   const editArticle = async (req,res)=>{
        let article = req.body;
      const editArticle = new Article(article);
        try{
       await Article.updateOne({_id:req.params.id},editArticle );
         res.status(201).json(editArticle);  
      }catch(error){
          res.status(409).json({message: error.message});
        }
      }

module.exports = {addArticle,getArticle,deleteArticle,getArticleById,getArticleToEdit,editArticle};