import React, { useImperativeHandle} from "react";

const InputControl = React.forwardRef((props, ref) => {
    // useImperativeHandle(ref, () => {
    //     return {
    //         focus: () => {
    //             inputRef.current.focus();
    //         },
    //         value: () => {
    //             return inputRef.current.value;
    //         }
    //     }
    // });
    return (
        <input 
            ref={ref}
            {...props}
        />
    )
})

export default InputControl;