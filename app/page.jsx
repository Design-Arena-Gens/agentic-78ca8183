export default function Page() {
  const quotes = [
    {
      text:
        "Qajtja nga frika e Allahut e zbut zemr?n dhe e pastron t? fsheht?n e saj.",
    },
    {
      text:
        "Nuk ?sht? i mang?t ai q? qan nga m?kati dhe kthehet te Zoti; i mang?t ?sht? ai q? buz?qesh mbi m?katin dhe e harron Zotin.",
    },
    {
      text:
        "Lot?t q? bien n? vetmi p?r hir t? Allahut jan? shenj? e sinqeritetit.",
    },
    {
      text:
        "Kur zemra p?rkulet, syri qan; dhe kur syri qan, zemra pastrohet.",
    },
    {
      text:
        "Nj? lot p?r pendim mund t? jet? m? i r?nd? se shum? vepra pa p?rul?si.",
    },
    {
      text:
        "Mos u turp?ro nga lot?t n? bindje; turp?rohu nga qet?sia n? gjynahe.",
    }
  ];

  return (
    <section>
      <h1>Fjal? nga Abdullah ibn Mubarak rreth lotit dhe qarjes</h1>
      <p className="lead">P?rkujtim p?r zemr?n: but?si, pendim dhe sinqeritet.</p>
      <ul className="quotes">
        {quotes.map((q, i) => (
          <li key={i} className="quote">
            <span>?{q.text}?</span>
          </li>
        ))}
      </ul>
      <div className="note">
        <p>
          Sh?nim: Th?niet jan? t? p?rmbledhura n? gjuh?n shqipe si k?shilla t?
          p?rgjithshme shpirt?rore t? atribuuara n? literatur?n tradicionale.
        </p>
      </div>
    </section>
  );
}
