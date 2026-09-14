export default function LoadingModal({ loading, loadingMsg }) {
    return (
        <div className="relative w-51.5 h-50 flex items-center 
        justify-center border border white rounded-2xl text-white">
            {loading && <div>
                {loadingMsg}
            </div>}
        </div>
    );
}