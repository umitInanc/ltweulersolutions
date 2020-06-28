
public final class p044 implements EulerSolution {
	
	public static void main(String[] args) {
		System.out.println(new p044().run());
	}
	
	
	public String run() {
		long minD = -1;  
		for (int i = 2; ; i++) {
			long pentI = pentagonalNumber(i);
			
			if (minD != -1 && pentI - pentagonalNumber(i - 1) >= minD)
				break;
			
			
			for (int j = i - 1; j >= 1; j--) {
				long pentJ = pentagonalNumber(j);
				long diff = pentI - pentJ;
				tagonal numbers
				if (minD != -1 && diff >= minD)
					break;
				else if (isPentagonalNumber(pentI + pentJ) && isPentagonalNumber(diff))
					minD = diff;  
			}
		}
		return Long.toString(minD);
	}
	
	
	private static long pentagonalNumber(int x) {
		if (x <= 0)
			throw new IllegalArgumentException();
		return (long)x * (x * 3 - 1) >>> 1;
	}
	
	
	private static boolean isPentagonalNumber(long y) {
		if (y <= 0)
			return false;
	
		long temp = y * 24 + 1;
		long sqrt = Library.sqrt(temp);
		return sqrt * sqrt == temp && sqrt % 6 == 5;
	}
	
}