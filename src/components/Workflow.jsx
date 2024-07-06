import { CheckCircle2 } from "lucide-react"
import codeImg from "../assets/code.jpg"
import { checklistItems } from "../constants"

const Workflow = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6">Accelerate your <span className="bg bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">coding workflow.</span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2">
                    <img src={codeImg} alt="Code" />
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex">
                            <div className="mx-6 mt-0.5 text-green-500 h-10 w-10">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="text-xl mb-2">{item.title}</h5>
                                <p className="text-md mb-10 text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Workflow