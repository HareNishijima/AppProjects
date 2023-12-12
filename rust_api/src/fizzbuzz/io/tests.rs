use super::*;

#[test]
fn 入力値を数値にパースできる(){
	// given
	let input = "1";

	// when
	let res = parsei32(input).unwrap();

	// then
	assert_eq!(res, 1);
}