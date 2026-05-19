import { useTheme } from "../context/ThemeContext.jsx";

const ThemeSwitcher = () => {
  const { isDark, toggleMode, industry, setIndustry, industries, industryKeys } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[260px] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between">
        <div className="text-xs font-mono uppercase tracking-wider text-gray-900 dark:text-gray-200">Theme Engine</div>
        <button
          type="button"
          onClick={toggleMode}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold text-gray-200 transition hover:border-white/20 hover:bg-black/50"
        >
          <span>{isDark ? "🌙" : "☀️"}</span>
          <span>{isDark ? "Dark" : "Light"}</span>
        </button>
      </div>

      <div className="mt-4">
        <div className="text-[11px] font-mono uppercase tracking-wider text-gray-900 dark:text-gray-200">Industry</div>
        <div className="mt-2 flex items-center gap-2">
          {industryKeys.map((key) => {
            const item = industries[key];
            const active = key === industry;
            const dotColor = isDark ? item.darkAccent : item.lightAccent;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setIndustry(key)}
                title={item.label}
                aria-label={item.label}
                className={`h-7 w-7 rounded-full border transition ${active ? "scale-110 border-white/60" : "border-white/20"}`}
                style={{ backgroundColor: dotColor }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
