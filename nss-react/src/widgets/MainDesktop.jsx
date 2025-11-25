import { useState } from "react";

export default function HeaderDesktop() {
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  //임시데이터
  const tempData = Array.from({ length: 13 }, (_, i) => i + 1);
  const chunkedData = [];
  for (let i = 0; i < tempData.length; i += 4) {
    chunkedData.push(tempData.slice(i, i + 4));
  }

  return (
    <div className="main-wrapper">
      <div className="sort-wrapper">
        <img src="/sort.svg" className="sort-icon" onClick={toggleSortOrder} />
        <div className="sort-classify">
          {sortOrder === "asc" ? "오름차순" : "내림차순"}
        </div>
      </div>
      <div className="main-content-wrapper-foralign">
        <div className="content-table-wrapper">
          {tempData.map((item) => (
            <div key={item} className="content-wrapper">
              <div className="content-box">
                <div className="content-preview-image-wrapper">
                  <img src="./hebi.jpg" className="content-preview-image" />
                </div>
                <div className="content-preview-content-wrapper">
                  <div className="content-title">지금부터 {item}</div>
                  <div className="content-desc">
                    기타 줄이 괜히 혼자 울리는 소리가 날 일으키는 것 같아
                    오늘따라 불은 꺼져 햇살을 받는 방안이 뭔가 허전해 바람아
                    기억해 줄래 흥얼거릴 때 이 맘을 바라니까 조금 더 멀리 멀리에
                    어디든 닿게 내 전부를 전부 다줄게 아무것도 들리지 않더라도
                    내안에 너를위한 음이 들려 설레서 더 미루기 싫다해도 우선
                    마이크에만 속삭일게 Ooh-oh, ooh-oh
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
