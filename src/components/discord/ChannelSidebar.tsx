import { ChevronDown, Hash, Volume2, Settings, Plus } from "lucide-react";

export const ChannelSidebar = () => {
  return (
    <div className="w-60 bg-[#2b2d31] flex flex-col">
      {/* Server Name */}
      <div className="h-12 px-4 flex items-center justify-between border-b border-[#1e1f22] hover:bg-[#35363c] cursor-pointer">
        <span className="text-white font-semibold">Direct Messages</span>
        <ChevronDown className="w-5 h-5 text-[#b5bac1]" />
      </div>

      {/* Search */}
      <div className="p-2">
        <button className="w-full bg-[#1e1f22] text-[#949ba4] text-sm py-1.5 px-2 rounded hover:bg-[#2e3035] text-left">
          Find or start a conversation
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto px-2">
        <div className="flex items-center gap-4 px-2 py-1.5 rounded hover:bg-[#35363c] cursor-pointer mb-1">
          <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-1h2v-4.5c0-1.1.9-2 2-2s2 .9 2 2V18h2v-4.5c0-2.21-1.79-4-4-4s-4 1.79-4 4V18z"/>
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-[#f2f3f5] text-sm font-medium">Shop</div>
          </div>
        </div>

        <div className="flex items-center gap-4 px-2 py-1.5 rounded hover:bg-[#35363c] cursor-pointer mb-1">
          <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-[#f2f3f5] text-sm font-medium">Quests</div>
          </div>
        </div>

        {/* TOP Section */}
        <div className="mt-4 mb-1">
          <div className="flex items-center justify-between px-2 py-1 group cursor-pointer">
            <span className="text-[#949ba4] text-xs font-semibold uppercase tracking-wide">Top</span>
            <ChevronDown className="w-4 h-4 text-[#949ba4]" />
          </div>
        </div>

        <div className="flex items-center gap-4 px-2 py-1.5 rounded hover:bg-[#35363c] cursor-pointer mb-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600"></div>
          <div className="flex-1">
            <div className="text-[#f2f3f5] text-sm font-medium">amit ❤️WILL</div>
          </div>
        </div>

        {/* GROUPS Section */}
        <div className="mt-4 mb-1">
          <div className="flex items-center justify-between px-2 py-1 group cursor-pointer">
            <span className="text-[#949ba4] text-xs font-semibold uppercase tracking-wide">Groups</span>
            <ChevronDown className="w-4 h-4 text-[#949ba4]" />
          </div>
        </div>

        <div className="bg-[#35363c] rounded px-2 py-1.5 mb-1 cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
            <div className="flex-1">
              <div className="text-[#f2f3f5] text-sm font-medium">digga</div>
              <div className="text-[#949ba4] text-xs">7 Members</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 px-2 py-1.5 rounded hover:bg-[#35363c] cursor-pointer mb-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600"></div>
          <div className="flex-1">
            <div className="text-[#f2f3f5] text-sm font-medium">help for beats</div>
            <div className="text-[#949ba4] text-xs">5 Members</div>
          </div>
        </div>

        <div className="flex items-center gap-4 px-2 py-1.5 rounded hover:bg-[#35363c] cursor-pointer mb-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600"></div>
          <div className="flex-1">
            <div className="text-[#f2f3f5] text-sm font-medium">ima let bach come in me...</div>
            <div className="text-[#949ba4] text-xs">10 Members</div>
          </div>
        </div>

        <div className="flex items-center gap-4 px-2 py-1.5 rounded hover:bg-[#35363c] cursor-pointer mb-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600"></div>
          <div className="flex-1">
            <div className="text-[#f2f3f5] text-sm font-medium">THE NEW GEY GROUP</div>
            <div className="text-[#949ba4] text-xs">9 Members</div>
          </div>
        </div>

        {/* NIGGERS Section */}
        <div className="mt-4 mb-1">
          <div className="flex items-center justify-between px-2 py-1 group cursor-pointer">
            <span className="text-[#949ba4] text-xs font-semibold uppercase tracking-wide">Direct Messages</span>
            <Plus className="w-4 h-4 text-[#949ba4]" />
          </div>
        </div>

        {[
          { name: "[DIVINE | Zero...", status: "🔥 SHXW", color: "from-yellow-500 to-orange-600" },
          { name: "ツ R Y U Z E N あ...", status: "✨ Aftercore", color: "from-pink-500 to-purple-600" },
          { name: "FetO_", status: "✅ KURL 🌋 After Effects", color: "from-blue-500 to-cyan-600" },
          { name: "CYCORE", status: "🖤 STAR", color: "from-gray-500 to-slate-600" },
        ].map((user, i) => (
          <div key={i} className="flex items-center gap-4 px-2 py-1.5 rounded hover:bg-[#35363c] cursor-pointer mb-1">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${user.color} relative`}>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#2b2d31] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-[#23a55a] rounded-full border-2 border-[#2b2d31]"></div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[#f2f3f5] text-sm font-medium truncate">{user.name}</div>
              <div className="text-[#949ba4] text-xs truncate">{user.status}</div>
            </div>
          </div>
        ))}
      </div>

      {/* User Bar */}
      <div className="h-[52px] bg-[#232428] px-2 flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 relative flex-shrink-0">
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#232428] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-[#23a55a] rounded-full border-2 border-[#232428]"></div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[#f2f3f5] text-sm font-medium truncate">mel</div>
            <div className="text-[#949ba4] text-xs truncate">🟢 • i hate life.</div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-[#35363c] rounded text-[#b5bac1] hover:text-[#f2f3f5]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a5 5 0 0 1 5 5v3h-2V7a3 3 0 0 0-6 0v3H7V7a5 5 0 0 1 5-5zm-4 9a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h4zm11 0a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h4z"/>
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-[#35363c] rounded text-[#b5bac1] hover:text-[#f2f3f5]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 11h12v2H6zm0-4h12v2H6zm0 8h12v2H6z"/>
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-[#35363c] rounded text-[#b5bac1] hover:text-[#f2f3f5]">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
