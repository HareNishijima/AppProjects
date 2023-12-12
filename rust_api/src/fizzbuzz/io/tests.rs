use super::*;

#[test]
fn 入力値を出力する(){
	// given

	// when
	let res = input();

	// then
	assert!(res.is_ok());
}