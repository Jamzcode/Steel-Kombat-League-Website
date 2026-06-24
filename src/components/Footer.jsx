export default function Footer() {
  return (
    <div class=" flex flex-col gap-2 bg-iron-void  text-ash">
      <div class="flex justify-around pt-md">
        <a href="https://www.facebook.com/share/17UJHXSnBK/?mibextid=wwXIfr">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/steelkombatleague?igsh=MXUwazZ3YjVqdDVvaw%253D%253D&utm_source=qr">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
          </svg>
        </a>
        <a href="https://www.tiktok.com/@steel.kombat.leag?_r=1&_t=zt-92xywmtjbba">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
          </svg>
        </a>
        <a href="https://youtube.com/@steelkombatleague?si=2dvNFP5Qa3DUl1JC">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
            <polygon
              fill="white"
              points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
            />
          </svg>
        </a>
      </div>

      <div>
        <p className="text-center text-slate font-mono text-label mt-lg tracking-widest uppercase ">
          © 2025 Steel Combat
        </p>
      </div>
    </div>
  );
}
