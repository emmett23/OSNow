import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

type StargWrapperProps = {
  Component: React.ComponentType<any>;
  idName: string;
};

const StarWrapper = ({ Component, idName }: StargWrapperProps) => {
    return (
        <motion.section
            variants={staggerContainer(0.2, 0.3)} // Adjust the numbers 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}>&nbsp;</span>
            <Component />
        </motion.section>
    );
};


export default StarWrapper;