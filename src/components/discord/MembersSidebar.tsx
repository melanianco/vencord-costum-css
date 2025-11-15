export const MembersSidebar = () => {
  const members = [
    { name: "mel", status: "🟢 • i hate life.", avatar: "from-green-500 to-emerald-600", online: true },
    { name: "zoku black", status: "🇫🇮 FINLAND", avatar: "from-blue-500 to-cyan-600", online: true, badge: "✅ VLHM" },
    { name: "amit ❤️WILL", status: "", avatar: "from-pink-500 to-red-600", online: true },
    { name: "Almighty James", status: "AI ® ShopGUI • 1 ACS +", avatar: "from-purple-500 to-indigo-600", online: true },
    { name: "LAIR", status: "", avatar: "from-yellow-500 to-orange-600", online: false },
    { name: "ツ R Y U Z E N あ", status: "", avatar: "from-red-500 to-pink-600", online: true, badge: "🎭 TYBW" },
  ];

  return (
    <div className="w-60 bg-[#2b2d31] overflow-y-auto" style={{ fontFamily: 'gg sans, "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      <div className="p-4">
        {/* Members Count */}
        <div className="text-[#949ba4] text-xs font-semibold uppercase tracking-wide mb-2">
          Members—7
        </div>

        {/* Member List */}
        <div className="space-y-1">
          {members.map((member, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 px-2 py-1.5 rounded hover:bg-[#35363c] cursor-pointer group"
            >
              <div className="relative flex-shrink-0">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${member.avatar}`}></div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#2b2d31] rounded-full flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full border-2 border-[#2b2d31] ${
                    member.online ? 'bg-[#23a55a]' : 'bg-[#80848e]'
                  }`}></div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-[#f2f3f5] text-sm font-medium truncate">
                    {member.name}
                  </span>
                  {member.badge && (
                    <span className="text-[#949ba4] text-xs flex-shrink-0">{member.badge}</span>
                  )}
                </div>
                {member.status && (
                  <div className="text-[#949ba4] text-xs truncate">{member.status}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
