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

#[test]
fn 入力値が数値以外の時はエラーになる(){
	// given
	let input = "invalid";

	// when
	let res = parsei32(input);

	// then
	assert!(res.is_err());
}