package Hello;

import java.util.Scanner;

public class Test {
  private String name;
  private int[] scores;

  public Test(String name, int[] scores) {
    this.name = name;
    this.scores = scores;
  }

  public String getName() {
    return name;
  }

  public int getScore(int index) {
    return scores[index];
  }

  public double getAverageScore() {
    double sum = 0.0;
    for (int i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    return sum / scores.length;
  }

  public static void main(String[] args) throws Exception {
    try (Scanner scanner = new Scanner(System.in)) {
      System.out.println("ENTER STUDENT NAME:");

      String name = scanner.nextLine();
      System.out.println("entry number of scores:");
      int numScores = scanner.nextInt();

      int[] scores = new int[numScores];

      for (int i = 0; i < numScores; i++) {
        System.out.println("entry score %d" + i + 1);
        scores[i] = scanner.nextInt();
      }

      Test student = new Test(name, scores);

      System.out.printf("%s's average score is %.2f\n", student.getName(), student.getAverageScore());

      for (int i = 0; i < numScores; i++) {
        System.out.printf("Score %d: %d\n", i + 1, student.getScore(i));
      }
    }
  }
}
