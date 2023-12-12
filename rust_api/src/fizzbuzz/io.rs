use std::num::ParseIntError;

#[cfg(test)]
mod tests;

pub fn input()->Result<i32, ParseIntError>{
	let mut input = String::new();
	std::io::stdin().read_line(&mut input).ok();
	let res = input.trim().parse::<i32>()?;

	Ok(res)
}