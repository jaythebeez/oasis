import React, { useEffect } from 'react'

import "./view.css";

interface Props {
    forms: FormField []
}

const View:React.FC<Props> = ({forms}) => {

    useEffect(()=>{
        console.log(forms);
    },[])

  return (
    <div>
        {
            forms.map((form, i) =>(
                <>
                    {form.type === "Dropdown" && (
                        <div key={i}>
                        <h2>{form.label}</h2>
                        <select className='form-control' name="" id="">
                            {form.options.map(option=>(
                            <option>{option.value}</option> 
                            ))}
                        </select>
                        </div>
                    )}
                    {form.type === "Checkbox" && (
                        <div key={i}>
                            <h2>{form.label}</h2>
                            <div>
                                {form.options.map((option,i)=>(
                                    <div>
                                        <label>{option.value}</label>
                                        <input type="checkbox" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            ))
        }
    </div>
  )
}

export default View