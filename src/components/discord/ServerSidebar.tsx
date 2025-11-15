export const ServerSidebar = () => {
  return (
    <div className="w-[72px] bg-[#1e1f22] flex flex-col items-center py-3 gap-2" style={{ fontFamily: 'gg sans, "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      {/* Home Button */}
      <div className="w-12 h-12 bg-[#5865f2] rounded-[24px] hover:rounded-[16px] transition-all duration-200 flex items-center justify-center cursor-pointer group">
        <svg width="28" height="20" viewBox="0 0 28 20" fill="white">
          <path d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.8242 0.934541 10.5929 0.461744 10.3407 0C8.49066 0.319519 6.68834 0.880778 4.97748 1.67818C1.56727 6.59853 0.649666 11.3895 1.11108 16.1153C3.10571 17.5273 5.38393 18.566 7.81063 19.1759C8.32896 18.4701 8.78465 17.7231 9.17253 16.9417C8.42284 16.6553 7.69979 16.3042 7.01692 15.8929C7.17899 15.7726 7.33853 15.6481 7.49391 15.5265C9.64942 16.4893 12.0033 16.9908 14.3842 16.9908C16.7652 16.9908 19.119 16.4893 21.2745 15.5265C21.4312 15.6585 21.5908 15.783 21.7515 15.8929C21.0686 16.3042 20.3456 16.6553 19.5959 16.9417C19.9838 17.7231 20.4395 18.4701 20.9578 19.1759C23.3845 18.566 25.6628 17.5273 27.6574 16.1153C28.193 10.7147 26.9127 5.9712 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.02 10.994C12.02 12.4453 10.9893 13.6383 9.68041 13.6383ZM19.0876 13.6383C17.8047 13.6383 16.748 12.4453 16.748 10.994C16.748 9.54272 17.7787 8.34973 19.0876 8.34973C20.3964 8.34973 21.4467 9.54272 21.4271 10.994C21.4271 12.4453 20.3964 13.6383 19.0876 13.6383Z"/>
        </svg>
      </div>
      
      <div className="w-8 h-[2px] bg-[#35363c] rounded-full"></div>

      {/* Server Icons */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div 
          key={i}
          className="w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] hover:bg-[#5865f2] transition-all duration-200 flex items-center justify-center cursor-pointer text-[#b5bac1] hover:text-white font-semibold text-lg"
        >
          S{i}
        </div>
      ))}

      <div 
        className="w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] hover:bg-[#3ba55d] transition-all duration-200 flex items-center justify-center cursor-pointer text-[#3ba55d] hover:text-white text-2xl"
      >
        +
      </div>
    </div>
  );
};
