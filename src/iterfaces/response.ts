interface IDiffLine {
  text1: string;
  text2: string;
  line: string;
}

interface IResComparePDF {
  message: string;
  differences?: IDiffLine[];
}

export { IDiffLine, IResComparePDF };
