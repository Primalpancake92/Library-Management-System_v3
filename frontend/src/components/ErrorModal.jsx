export default function ErrorModal({ error, errMsg }) {
    return (
        <div className="relative w-51.5 h-50 flex items-center 
        justify-center border border white rounded-2xl text-white">
            {error ?? <div>
                Error: {errMsg}
            </div>}
        </div>
    );
}