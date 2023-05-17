import React from 'react'
import avatar from '../images/avatar.png'

function Tweet() {
  return (
    <div 
        style = {{
            width : '100%' , 
            height : 'fit-content'  , 
            // padding : '20px 10px' , 
            display : 'flex' , 
            padding : '20px 0' , 
            borderBottom : '0.1px solid rgba(0,0,0,0.1)'
        }}
    >
        <div style = {{
            position: "relative"  ,
            width : "fit-content" ,  
            height : "100%" ,
        }}>
            <img src={avatar} alt="" 
                style = {{
                    height : "30px" ,  
                    width : "30px" , 
                    /* position: absolute ; */
                    borderRadius: "50%", 
                    marginTop : 0 , 
                    cursor : "pointer", 
                    objectFit: "contain" ,
                }}
            />
        </div>
        <div
            style = {{
                display : 'flex' , 
                flexDirection : 'column' , 
                alignItems : 'left' , 
                padding : '0 20px'
            }}
        
        >
            <span
                style = {{
                    display : 'flex' , 
                    justifyContent : 'flex-start' , 
                    marginBottom : '12px' , 
                    fontSize : '16px' , 
                    fontWeight : '700'
                }}
            >Tacos and Airplanes</span>
            <span
                style = {{
                    display : 'flex' , 
                    justifyContent : 'flex-start' , 
                    textAlign : 'left' , 
                    fontSize : '15px'
                }}
            >
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </span>
        </div>
    </div>
  )
}

export default Tweet