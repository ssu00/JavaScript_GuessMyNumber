# JavaScript_GuessMyNumber

## GuessMyNumber
### 1) 룰 설명
#### GuessMyNumber는 1~20 사이의 랜덤하게 정해지는 수를, 사용자가 맞히는 게임이다.

### 2) 초기 화면
#### ![image](https://user-images.githubusercontent.com/63658525/108591616-024bf180-73ad-11eb-832d-614252d32a37.png)

### 3) 범위를 벗어난 수를 입력했을 때...
#### ![image](https://user-images.githubusercontent.com/63658525/108591681-450dc980-73ad-11eb-8803-948e172d261c.png)
#### ![image](https://user-images.githubusercontent.com/63658525/108591696-5e167a80-73ad-11eb-951c-8712caed950f.png)
##### 위와 같이 Wrong Input!이 출력된다. 범위를 벗어난 수를 입력했을 때에는 Score에 영향을 주지 않는다.

### 4) 정해진 수보다 큰 수를 입력했을 때...
#### ![image](https://user-images.githubusercontent.com/63658525/108591736-8e5e1900-73ad-11eb-955f-b533a8e8ccbf.png)
##### Go Down!이라는 문구가 출력되며, Score가 1 감소한다.

### 5) 정해진 수보다 작은 수를 입력했을 때...
#### ![image](https://user-images.githubusercontent.com/63658525/108591756-aafa5100-73ad-11eb-9358-6b4e3ae2a1de.png)
##### Go Up!이라는 문구가 출력되며, Score가 1 감소한다. 

### 6) 정해진 수를 맞혔을 때...
#### ![image](https://user-images.githubusercontent.com/63658525/108591787-cc5b3d00-73ad-11eb-831f-d24a514e209f.png)
##### 화면의 색이 녹색으로 바뀌며, Correct number!라는 문구가 출력된다.
##### 만약 현재 스코어가 최고 스코어라면, High Score가 갱신된다.
