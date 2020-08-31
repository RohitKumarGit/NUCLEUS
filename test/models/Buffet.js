const mongoose=require('mongoose');
const buffetSchema=new mongoose.Schema({
  user_id:Number,
  restaurant_id:Number,
  available_slots:Array[{
    slot_time:{
      starting:String,
      ending:String
    },
    total_slots:Number,
    available_slots:Number
  }]
});
const Buffet=mongoose.model('Buffet',buffetSchema);
module.exports=Buffet;