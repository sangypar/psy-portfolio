"use client";

import { useEffect, useState } from "react";

// 아이템 타입 정의
interface DrawItem {
  id: number;
  name: string;
  probability: number;
}

// 결과 객체 타입 정의
interface DrawResults {
  [key: string]: number;
}

const Footer = () => {
  // 확률표 데이터
  const probabilityTable: DrawItem[] = [
    { id: 1, name: "C급 기억 조각", probability: 40.00 },
    { id: 2, name: "B급 기억 조각", probability: 20.00 },
    { id: 3, name: "A급 기억 조각", probability: 6.00 },
    { id: 4, name: "나키", probability: 1.00 },
    { id: 5, name: "리비카", probability: 3.00 },
    { id: 6, name: "슈타인", probability: 3.00 },
    { id: 7, name: "라사", probability: 3.00 },
    { id: 8, name: "웨일린", probability: 1.00 },
    { id: 9, name: "크리티", probability: 1.00 },
    { id: 10, name: "제프리", probability: 1.00 },
    { id: 11, name: "세레나", probability: 3.00 },
    { id: 12, name: "루안나", probability: 3.00 },
    { id: 13, name: "리오르", probability: 3.00 },
    { id: 14, name: "라비", probability: 1.00 },
    { id: 15, name: "초은", probability: 1.00 },
    { id: 16, name: "멜리", probability: 3.00 },
    { id: 17, name: "드프리븐", probability: 3.00 },
    { id: 18, name: "코니", probability: 1.00 },
    { id: 19, name: "비에트비츠카", probability: 1.00 },
    { id: 20, name: "크롤리", probability: 1.00 },
    { id: 21, name: "휴이", probability: 1.00 }
  ];

  // 뽑기 결과를 저장할 상태
  const [drawResults, setDrawResults] = useState<DrawResults>({});
  const [latestDraws, setLatestDraws] = useState<DrawItem[]>([]);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [totalDraws, setTotalDraws] = useState<number>(0);
  const [characterDraws, setCharacterDraws] = useState<number>(0);

  // 확률에 따른 아이템 뽑기 함수
  const drawItem = (): DrawItem => {
    const randomNumber = Math.random() * 100;
    let cumulativeProbability = 0;
    
    for (const item of probabilityTable) {
      cumulativeProbability += item.probability;
      if (randomNumber < cumulativeProbability) {
        return item;
      }
    }
    
    // 만약 위에서 반환되지 않았다면 (오류 방지) 마지막 아이템 반환
    return probabilityTable[probabilityTable.length - 1];
  };

  // 1회 뽑기 함수
  const handleSingleDraw = () => {
    if (isDrawing) return;
    
    setIsDrawing(true);
    const result = drawItem();
    
    // 결과 업데이트
    setDrawResults(prev => {
      const newResults = { ...prev };
      newResults[result.name] = (newResults[result.name] || 0) + 1;
      return newResults;
    });
    
    // 최근 뽑기 결과 업데이트
    setLatestDraws(prev => [result, ...prev].slice(0, 10));
    
    // 총 뽑기 횟수 업데이트
    setTotalDraws(prev => prev + 1);
    
    // 캐릭터 뽑기 횟수 업데이트 (id 4-21)
    if (result.id >= 4) {
      setCharacterDraws(prev => prev + 1);
    }
    
    setTimeout(() => {
      setIsDrawing(false);
    }, 500);
  };

  // 10회 뽑기 함수
  const handleTenDraw = () => {
    if (isDrawing) return;
    
    setIsDrawing(true);
    
    // 10회 뽑기 시작
    const drawNextItem = (
      count: number, 
      newResults: DrawResults, 
      newLatestDraws: DrawItem[], 
      newTotalDraws: number, 
      newCharacterDraws: number
    ) => {
      if (count <= 0) {
        // 모든 뽑기 완료
        setDrawResults(newResults);
        setLatestDraws(newLatestDraws.slice(0, 10));
        setTotalDraws(newTotalDraws);
        setCharacterDraws(newCharacterDraws);
        setIsDrawing(false);
        return;
      }
      
      const result = drawItem();
      
      // 결과 업데이트
      newResults[result.name] = (newResults[result.name] || 0) + 1;
      newLatestDraws.unshift(result);
      newTotalDraws += 1;
      
      // 캐릭터 뽑기 횟수 업데이트 (id 4-21)
      if (result.id >= 4) {
        newCharacterDraws += 1;
      }
      
      // 다음 뽑기를 위한 타임아웃 (애니메이션 효과)
      setTimeout(() => {
        drawNextItem(count - 1, newResults, newLatestDraws, newTotalDraws, newCharacterDraws);
      }, 50);
    };
    
    // 초기 상태로 시작
    drawNextItem(10, { ...drawResults }, [...latestDraws], totalDraws, characterDraws);
  };

  // 캐릭터 뽑기 확률 계산
  const getCharacterProbability = (): string => {
    if (totalDraws === 0) return "0.00";
    return ((characterDraws / totalDraws) * 100).toFixed(2);
  };

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="max-w-md w-full mx-auto p-4">
        <h2 className="text-xl font-bold mb-4 text-center">확률표</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-3 border-b text-left text-black text-sm">순위</th>
                <th className="py-2 px-3 border-b text-left text-black text-sm">상품명</th>
                <th className="py-2 px-3 border-b text-right text-black text-sm">확률</th>
              </tr>
            </thead>
            <tbody>
              {probabilityTable.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-1 px-3 border-b text-black text-sm">{item.id}</td>
                  <td className="py-1 px-3 border-b text-black text-sm">{item.name}</td>
                  <td className="py-1 px-3 border-b text-right text-black text-sm">{item.probability.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* 뽑기 버튼 */}
        <div className="flex justify-center gap-4 mb-6">
          <button 
            onClick={handleSingleDraw} 
            disabled={isDrawing}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            1회 뽑기
          </button>
          <button 
            onClick={handleTenDraw} 
            disabled={isDrawing}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            10회 뽑기
          </button>
        </div>
        
        {/* 최근 뽑기 결과 */}
        {latestDraws.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2 text-center">최근 뽑기 결과</h3>
            <div className="bg-white rounded-lg shadow-md p-3 flex flex-wrap gap-2 justify-center">
              {latestDraws.map((item, index) => (
                <div 
                  key={index} 
                  className="p-2 border rounded bg-gray-50 text-black text-sm"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 누적 뽑기 결과 */}
        {Object.keys(drawResults).length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2 text-center">누적 뽑기 결과</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-3 border-b text-left text-black text-sm">상품명</th>
                    <th className="py-2 px-3 border-b text-right text-black text-sm">횟수</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(drawResults)
                    .sort(([, countA], [, countB]) => countB - countA)
                    .map(([name, count], index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-1 px-3 border-b text-black text-sm">{name}</td>
                        <td className="py-1 px-3 border-b text-right text-black text-sm">{count}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* 뽑기 통계 */}
        {totalDraws > 0 && (
          <div>
            <h3 className="text-lg font-bold mb-2 text-center">뽑기 통계</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-2 px-3 border-b text-black">지금까지 뽑기 횟수</td>
                    <td className="py-2 px-3 border-b text-right text-black font-bold">{totalDraws}회</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b text-black">지금까지 뽑은 횟수 대비 캐릭터 확률</td>
                    <td className="py-2 px-3 border-b text-right text-black font-bold">
                      {characterDraws}회 ({getCharacterProbability()}%)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;