import type { InformationProps } from "./InformationProps"


function Information({ messages, color }: InformationProps){
    return(
        <div className={`my-3 p-3 rounded-lg border border-white font-medium ${color}`}>
            <ul className="list-disc pl-6">
                {messages.map((m) => <li key={m}>{m}</li>)}
            </ul>
        </div>
    )
}

export default Information