import BaseAnswer from "../models/baseAnswerModel.js";

(async () => {
  try {
    const role = await BaseAnswer.find();
    const values = [
      {
        numeroPregunta: "651469197696f60a133573de",
        visual: "B",
        auditivo: "A",
        lecturaEscritura: "C",
        kinestesico: "D",
      },
      {
        numeroPregunta: "651469197696f60a133573df",
        visual: "B",
        auditivo: "A",
        lecturaEscritura: "C",
        kinestesico: "D",
      },
      {
        numeroPregunta: "651469197696f60a133573e0",
        visual: "D",
        auditivo: "A",
        lecturaEscritura: "C",
        kinestesico: "B",
      },
      {
        numeroPregunta: "651469197696f60a133573e1",
        visual: "C",
        auditivo: "D",
        lecturaEscritura: "A",
        kinestesico: "B",
      },
      {
        numeroPregunta: "651469197696f60a133573e2",
        visual: "D",
        auditivo: "C",
        lecturaEscritura: "B",
        kinestesico: "A",
      },
      {
        numeroPregunta: "651469197696f60a133573e3",
        visual: "B",
        auditivo: "D",
        lecturaEscritura: "C",
        kinestesico: "A",
      },
      {
        numeroPregunta: "651469197696f60a133573e4",
        visual: "D",
        auditivo: "B",
        lecturaEscritura: "C",
        kinestesico: "A",
      },
      {
        numeroPregunta: "651469197696f60a133573e5",
        visual: "B",
        auditivo: "D",
        lecturaEscritura: "A",
        kinestesico: "C",
      },
      {
        numeroPregunta: "651469197696f60a133573e6",
        visual: "A",
        auditivo: "B",
        lecturaEscritura: "C",
        kinestesico: "D",
      },
      {
        numeroPregunta: "651469197696f60a133573e7",
        visual: "B",
        auditivo: "A",
        lecturaEscritura: "D",
        kinestesico: "C",
      },
      {
        numeroPregunta: "651469197696f60a133573e8",
        visual: "C",
        auditivo: "A",
        lecturaEscritura: "B",
        kinestesico: "D",
      },
      {
        numeroPregunta: "651469197696f60a133573e9",
        visual: "D",
        auditivo: "C",
        lecturaEscritura: "B",
        kinestesico: "A",
      },
      {
        numeroPregunta: "651469197696f60a133573ea",
        visual: "D",
        auditivo: "C",
        lecturaEscritura: "B",
        kinestesico: "A",
      },
      {
        numeroPregunta: "651469197696f60a133573eb",
        visual: "C",
        auditivo: "D",
        lecturaEscritura: "B",
        kinestesico: "A",
      },
      {
        numeroPregunta: "651469197696f60a133573ec",
        visual: "D",
        auditivo: "C",
        lecturaEscritura: "B",
        kinestesico: "A",
      },
      {
        numeroPregunta: "651469197696f60a133573ed",
        visual: "D",
        auditivo: "C",
        lecturaEscritura: "A",
        kinestesico: "B",
      },
    ];
    if (role.length > 0) return;
    const response = await Promise.all([
      values.map((value) => {
        new BaseAnswer(value).save();
        console.log(value);
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
})();
