import { motion } from "framer-motion";

const variants ={
    initial:{x:"-100%"},
    open: {x: 0},
    exit: {x:'-100%'}
}
export const TransitionPage = ({children,...props}) => {
    return (
        <motion.div             
        initial='initial'
        animate='open'
        exit='exit'
        variants={variants}
        onAnimationStart={()=> (document.body.style.overflow = 'hidden')}
        onAnimationEnd={() =>(document.body.style.overflow = 'hidden')}
        onAnimationComplete={() =>(document.body.style.overflow = 'auto')}
        transition={{duration:1,type:'spring',bounce:0.5}}
        {...props}>
            {children}
        </motion.div>
    )
}