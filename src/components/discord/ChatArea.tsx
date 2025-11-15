import { Hash, Bell, Pin, Users, Search, Inbox, HelpCircle, Mic, Video, PhoneCall, Smile, Gift, Sticker, Plus } from "lucide-react";

export const ChatArea = () => {
  const messages = [
    { user: "mel", avatar: "from-purple-500 to-blue-600", time: "Today at 11:19 PM", content: "Hello", status: "online" },
    { user: "amit ❤️WILL", avatar: "from-pink-500 to-red-600", time: "Today at 11:19 PM", content: "hello", status: "online" },
    { user: "mel", avatar: "from-purple-500 to-blue-600", time: "Today at 11:19 PM", content: "how are you guys", status: "online" },
    { user: "amit ❤️WILL", avatar: "from-pink-500 to-red-600", time: "Today at 11:19 PM", content: "good", status: "online" },
    { user: "ツ R Y U Z E N あ", avatar: "from-yellow-500 to-orange-600", time: "Today at 11:19 PM", content: "What's up", status: "idle", badge: "🎭 TYBW" },
    { user: "amit ❤️WILL", avatar: "from-pink-500 to-red-600", time: "Today at 11:19 PM", content: "hiiiii", status: "online" },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#313338]" style={{ fontFamily: 'gg sans, "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      {/* Top Bar */}
      <div className="h-12 px-4 flex items-center justify-between border-b border-[#26272b] bg-[#313338]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#5865f2] flex items-center justify-center">
            <Hash className="w-4 h-4 text-white" />
          </div>
          <span className="text-[#f2f3f5] font-semibold">digga</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#b5bac1] hover:text-[#f2f3f5] p-1">
            <Mic className="w-5 h-5" />
          </button>
          <button className="text-[#b5bac1] hover:text-[#f2f3f5] p-1">
            <Video className="w-5 h-5" />
          </button>
          <button className="text-[#b5bac1] hover:text-[#f2f3f5] p-1">
            <PhoneCall className="w-5 h-5" />
          </button>
          <button className="text-[#b5bac1] hover:text-[#f2f3f5] p-1">
            <Users className="w-5 h-5" />
          </button>
          <div className="w-[1px] h-6 bg-[#3f4147]"></div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-[#1e1f22] text-[#f2f3f5] placeholder-[#949ba4] px-2 py-1 rounded text-sm w-36 focus:outline-none focus:w-60 transition-all"
            />
          </div>
          <button className="text-[#b5bac1] hover:text-[#f2f3f5] p-1">
            <Inbox className="w-5 h-5" />
          </button>
          <button className="text-[#b5bac1] hover:text-[#f2f3f5] p-1">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Voice Connected Bar */}
      <div className="bg-[#1e1f22] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-[#3ba55d] text-sm font-medium">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00004H3C2.45 8.00004 2 8.45004 2 9.00004V15C2 15.55 2.45 16 3 16H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20V4.00004C12 3.59304 11.757 3.22804 11.383 3.07904ZM14 5.00004V7.00004C16.757 7.00004 19 9.24304 19 12C19 14.757 16.757 17 14 17V19C17.86 19 21 15.86 21 12C21 8.14004 17.86 5.00004 14 5.00004ZM14 9.00004V11C15.654 11 17 12.346 17 14C17 15.654 15.654 17 14 17V15C14.551 15 15 14.551 15 14C15 13.449 14.551 13 14 13V11C15.103 11 16 11.897 16 13C16 14.103 15.103 15 14 15Z"/>
            </svg>
            Voice Connected
          </div>
          <span className="text-[#949ba4] text-sm">digga</span>
          <span className="text-[#949ba4] text-xs">/ 05:13</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#35363c] rounded text-[#b5bac1] hover:text-[#f2f3f5]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </button>
          <button className="p-2 hover:bg-[#35363c] rounded text-[#b5bac1] hover:text-[#f2f3f5]">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-[#35363c] rounded text-[#b5bac1] hover:text-[#f2f3f5]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"/>
              <path d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"/>
              <path d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"/>
              <path d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.80098 16.206 4.00598 14.0001 4.00598C13.6826 4.00598 13.3745 4.03374 13.0788 4.08665C13.6626 4.82511 14.0001 5.77116 14.0001 6.80598C14.0001 8.90011 12.6657 10.6968 10.8834 11.1001C11.5539 11.6283 12.3502 12.006 13.2213 12.1791C13.8081 12.0908 14.4001 12.006 15.0001 12.006C16.1536 12.006 17.2223 12.2839 18.1667 12.7743C19.1111 12.2839 20.1798 12.006 21.3333 12.006C22.0396 12.006 22.7274 12.0908 23.3808 12.1791C20.2574 11.3674 17.5969 9.15374 16.1667 6.28598H14.8834V11.9077Z"/>
            </svg>
          </button>
          <div className="w-[1px] h-6 bg-[#3f4147]"></div>
          <button className="px-3 py-1.5 bg-[#da373c] hover:bg-[#a12d30] rounded text-white text-sm font-medium">
            Disconnect
          </button>
        </div>
      </div>

      {/* Video Call Area */}
      <div className="bg-[#1e1f22] p-4 flex items-center justify-center gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg"></div>
        ))}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.map((msg, i) => (
          <div key={i} className="flex gap-4 mb-4 hover:bg-[#2e3035] px-2 py-1 -mx-2 rounded group">
            <div className="relative flex-shrink-0">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${msg.avatar}`}></div>
              {msg.status && (
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#313338] rounded-full flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full border-2 border-[#313338] ${
                    msg.status === 'online' ? 'bg-[#23a55a]' : 
                    msg.status === 'idle' ? 'bg-[#f0b232]' : 
                    'bg-[#80848e]'
                  }`}></div>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="text-[#f2f3f5] font-medium text-sm">{msg.user}</span>
                {msg.badge && (
                  <span className="text-[#949ba4] text-xs">{msg.badge}</span>
                )}
                <span className="text-[#949ba4] text-xs">{msg.time}</span>
              </div>
              <div className="text-[#dbdee1] text-sm mt-0.5">{msg.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="px-4 pb-6">
        <div className="bg-[#383a40] rounded-lg px-4 py-3">
          <div className="flex items-center gap-3">
            <button className="text-[#b5bac1] hover:text-[#f2f3f5]">
              <Plus className="w-6 h-6" />
            </button>
            <input 
              type="text" 
              placeholder="Message digga"
              className="flex-1 bg-transparent text-[#f2f3f5] placeholder-[#6d6f78] text-sm focus:outline-none"
            />
            <div className="flex items-center gap-2">
              <button className="text-[#b5bac1] hover:text-[#f2f3f5]">
                <Gift className="w-5 h-5" />
              </button>
              <button className="text-[#b5bac1] hover:text-[#f2f3f5]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </button>
              <button className="text-[#b5bac1] hover:text-[#f2f3f5]">
                <Sticker className="w-5 h-5" />
              </button>
              <button className="text-[#b5bac1] hover:text-[#f2f3f5]">
                <Smile className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
