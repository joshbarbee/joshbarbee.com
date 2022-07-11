variable "aws_secret" {
  description = "The aws secret of the user. Recommend setting "
  type        = string
  sensitive = true
}

variable "aws_key" {
  description = "The aws api key of the user"
  type        = string
  sensitive = true
}

variable "type" {
    description = "The type of machine to deploy to"
    type = string
    default = "t2.micro"
}

variable "ami" {
    description = "The ami identifier of the box to use"
    type = string
    default = "ami-02f3416038bdb17fb"
}

variable "env" {
    description = "The environment to deploy to"
    type = string
    default = "joshbarbee.com-PROD"
}

variable "name" {
    description = "A tag to name networking and services by"
    type = string
    default = "joshbarbee.com"
}