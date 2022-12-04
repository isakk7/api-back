import {connect} from 'mongoose';

export async function startConnection(){
   await connect('mongodb+srv://isaacal:Bart1234@cluster0.d6g0oem.mongodb.net/?retryWrites=true&w=majority', {
        // useNewUrlParser: true,
        //   useFindAndModify: false

    });
    console.log('Database is connected')

}
