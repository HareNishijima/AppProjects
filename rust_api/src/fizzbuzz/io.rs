use std::num::ParseIntError;

#[cfg(test)]
mod tests;

pub fn parsei32(input: &str)->Result<i32, ParseIntError>{
	let res = input.trim().parse::<i32>()?;
	Ok(res)
}