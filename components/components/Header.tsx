export default function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-6">
      {/* 프로필 이미지 (나중에 실제 이미지로 교체 가능) */}
      <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0" />

      <div className="flex-1">
        <h2 className="text-2xl font-semibold">홍길동</h2>
        <p className="text-gray-600">Frontend Developer — React / Next.js</p>

        <p className="mt-3 text-gray-700">
          짧은 자기소개: UI/UX와 인터랙션에 관심이 많고, 깔끔한 디자인을 선호.
        </p>
      </div>

      <div className="text-right">
        <button className="px-4 py-2 bg-black text-white rounded-md">
          Contact
        </button>
      </div>
    </div>
  );
}
