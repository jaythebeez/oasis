import React, { useState } from "react"
import "./add.css";

interface Props {
    forms: FormField[],
    setForms: React.Dispatch<React.SetStateAction<FormField[]>>
}


const Add:React.FC<Props> = ({forms,setForms}) => {
    const [options, setOptions] = useState< option[] >([{
        value: ""
    }])

    const [fieldType, setFieldType] = useState<FieldTypes>("Dropdown")

    const [drop_label, setDrop_label] = useState("");

    const handleLabel = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDrop_label(e.target.value);
    }

    const addOption = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOptions(options=>{
            return [...options, {
                value: ""
            }]
        })
    }

    const editOptions = (e:React.ChangeEvent<HTMLInputElement> , index: number): void => {
        setOptions(options=>{
            return options.map((option,i)=>{
                if (i === index) {
                    option.value = e.target.value
                }
                return option;
            })
        })
    }

    const addDropdown= () => {
        const Dropdown: FormField  = {
            label: drop_label,
            options: [...options],
            type: fieldType
        }
        
        setForms([...forms,Dropdown]);
        setDrop_label("");
        setOptions([{
            value:""
        }]);
    }

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) : void => {
        let value = e.target.value;
        if(value === "Checkbox" || value === "Dropdown"){
            setFieldType(value);
        } 
    }

    return (
        <div className="add-container">
            <div>
                <div>
                    <div className="form-container" id="">
                        <label htmlFor="dropdown-label" className="form-header">Add field</label>
                        <select onChange={handleSelect} className="form-control">
                            <option value={"Dropdown"}  >Dropdown</option>
                            <option value={"Checkbox"} >Checkbox</option>
                        </select>
                        <input type="text" id="dropdown-label" className="form-control" placeholder="Add label" value={drop_label} onChange={handleLabel}/>
                        <>
                            {options.map((option,i)=>(
                                <input key={i} type="text" placeholder="Add-option" onChange={(e)=>editOptions(e,i)} value={option.value} className="form-control" />
                            ))}
                        </>
                        <div className="btn-container">
                            <button onClick={addOption}>Add Option</button>
                            <button onClick={addDropdown}>Save Dropdown</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add;