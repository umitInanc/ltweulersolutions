

public final class p034 implements EulerSolution {
	
	public static void main(String[] args) {
		System.out.println(new p034().run());
	}
	
	
	public String run() {
		int sum = 0;
		for (int i = 3; i < 10000000; i++) {
			if (i == factorialDigitSum(i))
				sum += i;
		}
		return Integer.toString(sum);
	}
	
	
	private static int[] FACTORIAL = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};
	
	private static int factorialDigitSum(int x) {
		int sum = 0;
		while (x != 0) {
			sum += FACTORIAL[x % 10];
			x /= 10;
		}
		return sum;
	}
	
}